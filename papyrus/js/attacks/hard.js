// Hard difficulty — Bonetrousle 150 BPM, P_BEAT = 0.4s
// Aggressive Papyrus patterns: fast bone volleys, dense 8th-notes, direction surprises
// Speeds 250-500, spears P_BEAT_MS*0.75 (~300ms) → P_BEAT_MS*0.5 (~200ms)

// Fast player-tracking
var p_h_ag1 = {
	type: "arrow", id: "p_h_ag1", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,          speed: 250 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT,     speed: 250 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 2, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 3, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 4, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 5, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 6, speed: 250 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 7, speed: 250 },
	],
	next_sets: ["p_h_ag2"],
};

// Chaotic mixed tracking: center/sides cycling fast
var p_h_ag2 = {
	type: "arrow", id: "p_h_ag2", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,          speed: 300 },
		{ direction: "$4", turntype: 0, target_time: P_BEAT,     speed: 300 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 2, speed: 300 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 3, speed: 300 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 4, speed: 300 },
		{ direction: "$4", turntype: 0, target_time: P_BEAT * 5, speed: 300 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 6, speed: 300 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 7, speed: 300 },
	],
	next_sets: ["p_h_ag3"],
};

// Cross-pattern: top-bottom interleaved with left-right
var p_h_ag3 = {
	type: "arrow", id: "p_h_ag3", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0,          speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT,     speed: 400 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 2, speed: 400 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 3, speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 4, speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5, speed: 400 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 6, speed: 400 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 7, speed: 400 },
	],
	next_sets: ["p_h_ag4"],
};

// Bone rows: 4 from right, 4 from left (mirror of easy's 2222/4444)
var p_h_ag4 = {
	type: "arrow", id: "p_h_ag4", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 0, target_time: 0,          speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT,     speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 2, speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 3, speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 4, speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 5, speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 6, speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 7, speed: 500 },
	],
	next_sets: ["p_h_sp1"],
};

// ~300ms
var p_h_sp1 = {
	type: "spear",
	next_time: P_BEAT * 24,
	buffer_time: P_BEAT * 4,
	spear_interval: P_BEAT_MS * 0.75,
	next_sets: ["p_h_ag5"],
};

// 8th-note top-bottom with mid-point direction flip
var p_h_ag5 = {
	type: "arrow", id: "p_h_ag5", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0,               speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT / 2,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT,          speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 3 / 2,  speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 2,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5 / 2,  speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 3,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 4,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 6,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 7,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 15 / 2, speed: 450 },
	],
	next_sets: ["p_h_ag6"],
};

// 8th-note four-direction cycle: 4/1/3/2
var p_h_ag6 = {
	type: "arrow", id: "p_h_ag6", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 0, target_time: 0,               speed: 500 },
		{ direction: "1", turntype: 0, target_time: P_BEAT / 2,      speed: 500 },
		{ direction: "3", turntype: 0, target_time: P_BEAT,          speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 3 / 2,  speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 2,      speed: 500 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5 / 2,  speed: 500 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 3,      speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 4,      speed: 500 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 500 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 5,      speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 6,      speed: 500 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 500 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 7,      speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 15 / 2, speed: 500 },
	],
	next_sets: ["p_h_sp2"],
};

// ~200ms
var p_h_sp2 = {
	type: "spear",
	next_time: P_BEAT * 24,
	buffer_time: P_BEAT * 4,
	spear_interval: P_BEAT_MS * 0.5,
	next_sets: ["p_h_ag7"],
};

// Quarter cross-pattern then dense 8th burst at max speed
var p_h_ag7 = {
	type: "arrow", id: "p_h_ag7", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0,               speed: 400 },
		{ direction: "4", turntype: 0, target_time: P_BEAT,          speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 2,      speed: 400 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 3,      speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 4,      speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 500 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 5,      speed: 500 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 500 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 6,      speed: 500 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 500 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 7,      speed: 500 },
	],
	next_sets: ["p_h_ag8"],
};

// Curving arrows at max speed: 2→3→4→1 cycle
var p_h_ag8 = {
	type: "arrow", id: "p_h_ag8", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 3, target_time: 0,          speed: 500 },
		{ direction: "3", turntype: 2, target_time: P_BEAT,     speed: 500 },
		{ direction: "4", turntype: 3, target_time: P_BEAT * 2, speed: 500 },
		{ direction: "1", turntype: 2, target_time: P_BEAT * 3, speed: 500 },
		{ direction: "2", turntype: 3, target_time: P_BEAT * 4, speed: 500 },
		{ direction: "3", turntype: 2, target_time: P_BEAT * 5, speed: 500 },
		{ direction: "4", turntype: 3, target_time: P_BEAT * 6, speed: 500 },
		{ direction: "1", turntype: 2, target_time: P_BEAT * 7, speed: 500 },
	],
	next_sets: ["p_h_sp1"],
};
