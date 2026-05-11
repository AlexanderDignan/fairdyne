param([int]$Port = 8080, [string]$Game = "undyne")

$root = $PSScriptRoot
if (-not (Test-Path (Join-Path $root $Game))) { Write-Error "Game folder '$Game' not found"; exit 1 }

$prefix = "http://localhost:$Port/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host "Serving '$Game' at ${prefix}$Game/  (Ctrl+C to stop)"
Start-Process "${prefix}$Game/"

$mimeTypes = @{
    ".html" = "text/html"
    ".js"   = "application/javascript"
    ".css"  = "text/css"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".gif"  = "image/gif"
    ".wav"  = "audio/wav"
    ".mp3"  = "audio/mpeg"
    ".ogg"  = "audio/ogg"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
    ".eot"  = "application/vnd.ms-fontobject"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".json" = "application/json"
}

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response

        $urlPath = $req.Url.AbsolutePath

        # Redirect bare root to the game subfolder
        if ($urlPath -eq "/") {
            $res.Redirect("/$Game/")
            $res.OutputStream.Close()
            continue
        }

        # Serve index.html for the game's directory root
        if ($urlPath -eq "/$Game" -or $urlPath -eq "/$Game/") {
            $urlPath = "/$Game/index.html"
        }

        $relative = $urlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path $root $relative

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $res.ContentType = $mime
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $res.StatusCode = 404
            $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
            $res.ContentLength64 = $body.Length
            $res.OutputStream.Write($body, 0, $body.Length)
        }

        $res.OutputStream.Close()
    }
} finally {
    $listener.Stop()
}
