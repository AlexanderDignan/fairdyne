// Hard difficulty — Undyne Hard (full) equivalent (148 BPM)
// Speeds 250-500, spears BEAT_MS*0.75 (~300ms) → BEAT_MS*0.5 (~200ms)

var h_ag1 = {
	type: "arrow", id: "h_ag1", next_time: BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,        speed: 250 },
		{ direction: "$3", turntype: 0, target_time: BEAT,     speed: 250 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 2, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 3, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 4, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 5, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 6, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 7, speed: 250 },
	],
	next_sets: ["h_ag2"],
};

var h_ag2 = {
	type: "arrow", id: "h_ag2", next_time: BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,        speed: 300 },
		{ direction: "$3", turntype: 0, target_time: BEAT,     speed: 300 },
		{ direction: "$2", turntype: 0, target_time: BEAT * 2, speed: 300 },
		{ direction: "$2", turntype: 0, target_time: BEAT * 3, speed: 300 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 4, speed: 300 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 5, speed: 300 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 6, speed: 300 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 7, speed: 300 },
	],
	next_sets: ["h_ag3"],
};

var h_ag3 = {
	type: "arrow", id: "h_ag3", next_time: BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,        speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT,     speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 2, speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3, speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 4, speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 5, speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 6, speed: 400 },
		{ direction: "1", turntype: 0, target_time: BEAT * 7, speed: 400 },
	],
	next_sets: ["h_ag4"],
};

var h_ag4 = {
	type: "arrow", id: "h_ag4", next_time: BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,        speed: 500 },
		{ direction: "2", turntype: 0, target_time: BEAT,     speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT * 2, speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3, speed: 500 },
		{ direction: "1", turntype: 0, target_time: BEAT * 4, speed: 500 },
		{ direction: "2", turntype: 0, target_time: BEAT * 5, speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT * 6, speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7, speed: 500 },
	],
	next_sets: ["h_sp1"],
};

// ~300ms — Undyne Hard sp4 equivalent
var h_sp1 = {
	type: "spear",
	next_time: BEAT * 24,
	buffer_time: BEAT * 4,
	spear_interval: BEAT_MS * 0.75,
	next_sets: ["h_ag5"],
};

var h_ag5 = {
	type: "arrow", id: "h_ag5", next_time: BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,             speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT / 2,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT,          speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 3 / 2,  speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 2,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5 / 2,  speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 3,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 7 / 2,  speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 4,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 9 / 2,  speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 11 / 2, speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 6,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 13 / 2, speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 7,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 15 / 2, speed: 450 },
	],
	next_sets: ["h_ag6"],
};

var h_ag6 = {
	type: "arrow", id: "h_ag6", next_time: BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,             speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT / 2,      speed: 500 },
		{ direction: "1", turntype: 0, target_time: BEAT,          speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3 / 2,  speed: 500 },
		{ direction: "2", turntype: 0, target_time: BEAT * 2,      speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5 / 2,  speed: 500 },
		{ direction: "1", turntype: 0, target_time: BEAT * 3,      speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7 / 2,  speed: 500 },
		{ direction: "2", turntype: 0, target_time: BEAT * 4,      speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT * 9 / 2,  speed: 500 },
		{ direction: "1", turntype: 0, target_time: BEAT * 5,      speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 11 / 2, speed: 500 },
		{ direction: "2", turntype: 0, target_time: BEAT * 6,      speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT * 13 / 2, speed: 500 },
		{ direction: "1", turntype: 0, target_time: BEAT * 7,      speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 15 / 2, speed: 500 },
	],
	next_sets: ["h_sp2"],
};

// ~200ms — Undyne Genocide-tier spear density
var h_sp2 = {
	type: "spear",
	next_time: BEAT * 24,
	buffer_time: BEAT * 4,
	spear_interval: BEAT_MS * 0.5,
	next_sets: ["h_ag7"],
};

// Mixed quarter + 8th burst at high speed
var h_ag7 = {
	type: "arrow", id: "h_ag7", next_time: BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 0, target_time: 0,             speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT,          speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 2,      speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 3,      speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 7 / 2,  speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT * 4,      speed: 500 },
		{ direction: "1", turntype: 0, target_time: BEAT * 9 / 2,  speed: 500 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5,      speed: 500 },
		{ direction: "1", turntype: 0, target_time: BEAT * 11 / 2, speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 6,      speed: 500 },
		{ direction: "2", turntype: 0, target_time: BEAT * 13 / 2, speed: 500 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7,      speed: 500 },
	],
	next_sets: ["h_ag8"],
};

// Curving arrows at max speed
var h_ag8 = {
	type: "arrow", id: "h_ag8", next_time: BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 3, target_time: 0,        speed: 500 },
		{ direction: "3", turntype: 2, target_time: BEAT,     speed: 500 },
		{ direction: "2", turntype: 2, target_time: BEAT * 2, speed: 500 },
		{ direction: "1", turntype: 2, target_time: BEAT * 3, speed: 500 },
		{ direction: "4", turntype: 3, target_time: BEAT * 4, speed: 500 },
		{ direction: "3", turntype: 2, target_time: BEAT * 5, speed: 500 },
		{ direction: "2", turntype: 2, target_time: BEAT * 6, speed: 500 },
		{ direction: "1", turntype: 2, target_time: BEAT * 7, speed: 500 },
	],
	next_sets: ["h_sp1"],
};
