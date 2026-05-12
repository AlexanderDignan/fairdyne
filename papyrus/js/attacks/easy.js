// Easy difficulty — Bonetrousle 150 BPM, P_BEAT = 0.4s
// Papyrus-style: bone rows, left-right sweeps, top-bottom pairs

// Tutorial: player-tracking bones one at a time
var p_ag1 = {
	type: "arrow", id: "p_ag1", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,          speed: 100 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT,     speed: 100 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 2, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 3, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 4, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 5, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 6, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 7, speed: 100 },
	],
	next_sets: ["p_ag2"],
};

// Paired right-right-left-left (bone wave from each side)
var p_ag2 = {
	type: "arrow", id: "p_ag2", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "$4", turntype: 0, target_time: 0,          speed: 150 },
		{ direction: "$4", turntype: 0, target_time: P_BEAT,     speed: 150 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 2, speed: 150 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 3, speed: 150 },
		{ direction: "$4", turntype: 0, target_time: P_BEAT * 4, speed: 150 },
		{ direction: "$4", turntype: 0, target_time: P_BEAT * 5, speed: 150 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 6, speed: 150 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 7, speed: 150 },
	],
	next_sets: ["p_ag3"],
};

// Top-bottom pairs then left-right pairs
var p_ag3 = {
	type: "arrow", id: "p_ag3", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0,          speed: 200 },
		{ direction: "1", turntype: 0, target_time: P_BEAT,     speed: 200 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 2, speed: 200 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 3, speed: 200 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 4, speed: 200 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 5, speed: 200 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 6, speed: 200 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 7, speed: 200 },
	],
	next_sets: ["p_ag4"],
};

// Bone row: 4 from left, 4 from right
var p_ag4 = {
	type: "arrow", id: "p_ag4", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,          speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT,     speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 2, speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 3, speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 4, speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 5, speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 6, speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 7, speed: 250 },
	],
	next_sets: ["p_sp1"],
};

// ~800ms — two beats
var p_sp1 = {
	type: "spear",
	next_time: P_BEAT * 24,
	buffer_time: P_BEAT * 4,
	spear_interval: P_BEAT_MS * 2,
	next_sets: ["p_ag5"],
};

// Dense 8th-note left-right sweep
var p_ag5 = {
	type: "arrow", id: "p_ag5", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,               speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT / 2,      speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT,          speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 3 / 2,  speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 2,      speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 5 / 2,  speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 3,      speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 4,      speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 5,      speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 6,      speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 7,      speed: 250 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 15 / 2, speed: 250 },
	],
	next_sets: ["p_ag6"],
};

// Dense 8th-note four-direction cycle
var p_ag6 = {
	type: "arrow", id: "p_ag6", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0,               speed: 300 },
		{ direction: "1", turntype: 0, target_time: P_BEAT / 2,      speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT,          speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 3 / 2,  speed: 300 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 2,      speed: 300 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5 / 2,  speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 3,      speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 300 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 4,      speed: 300 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 5,      speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 300 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 6,      speed: 300 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 7,      speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 15 / 2, speed: 300 },
	],
	next_sets: ["p_sp2"],
};

// ~520ms
var p_sp2 = {
	type: "spear",
	next_time: P_BEAT * 24,
	buffer_time: P_BEAT * 4,
	spear_interval: P_BEAT_MS * 1.3,
	next_sets: ["p_ag7"],
};

// Quarter-note top-bottom, then 8th-note left-right burst
var p_ag7 = {
	type: "arrow", id: "p_ag7", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0,               speed: 250 },
		{ direction: "1", turntype: 0, target_time: P_BEAT,          speed: 250 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 2,      speed: 250 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 3,      speed: 250 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 4,      speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 5,      speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 6,      speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 7,      speed: 300 },
	],
	next_sets: ["p_ag8"],
};

// Clockwise sweeping curved bones: 3→4→1→2 cycle
var p_ag8 = {
	type: "arrow", id: "p_ag8", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 3, target_time: 0,          speed: 300 },
		{ direction: "4", turntype: 2, target_time: P_BEAT,     speed: 300 },
		{ direction: "1", turntype: 3, target_time: P_BEAT * 2, speed: 300 },
		{ direction: "2", turntype: 2, target_time: P_BEAT * 3, speed: 300 },
		{ direction: "3", turntype: 3, target_time: P_BEAT * 4, speed: 300 },
		{ direction: "4", turntype: 2, target_time: P_BEAT * 5, speed: 300 },
		{ direction: "1", turntype: 3, target_time: P_BEAT * 6, speed: 300 },
		{ direction: "2", turntype: 2, target_time: P_BEAT * 7, speed: 300 },
	],
	next_sets: ["p_sp1"],
};
