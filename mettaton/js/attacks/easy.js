// Easy difficulty — Undyne Normal equivalent (148 BPM)
// Quarter notes throughout, speeds 100-300, spears ~600ms → ~480ms

var e_ag1 = {
	type: "arrow", id: "e_ag1", next_time: BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,        speed: 100 },
		{ direction: "$3", turntype: 0, target_time: BEAT,     speed: 100 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 2, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 3, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 4, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 5, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 6, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 7, speed: 100 },
	],
	next_sets: ["e_ag2"],
};

var e_ag2 = {
	type: "arrow", id: "e_ag2", next_time: BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,        speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT,     speed: 150 },
		{ direction: "$2", turntype: 0, target_time: BEAT * 2, speed: 150 },
		{ direction: "$2", turntype: 0, target_time: BEAT * 3, speed: 150 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 4, speed: 150 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 5, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 6, speed: 150 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 7, speed: 150 },
	],
	next_sets: ["e_ag3"],
};

var e_ag3 = {
	type: "arrow", id: "e_ag3", next_time: BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,        speed: 200 },
		{ direction: "4", turntype: 0, target_time: BEAT,     speed: 200 },
		{ direction: "2", turntype: 0, target_time: BEAT * 2, speed: 200 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3, speed: 200 },
		{ direction: "4", turntype: 0, target_time: BEAT * 4, speed: 200 },
		{ direction: "2", turntype: 0, target_time: BEAT * 5, speed: 200 },
		{ direction: "2", turntype: 0, target_time: BEAT * 6, speed: 200 },
		{ direction: "1", turntype: 0, target_time: BEAT * 7, speed: 200 },
	],
	next_sets: ["e_ag4"],
};

var e_ag4 = {
	type: "arrow", id: "e_ag4", next_time: BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,        speed: 250 },
		{ direction: "2", turntype: 0, target_time: BEAT,     speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 2, speed: 250 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3, speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT * 4, speed: 250 },
		{ direction: "2", turntype: 0, target_time: BEAT * 5, speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 6, speed: 250 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7, speed: 250 },
	],
	next_sets: ["e_sp1"],
};

// ~600ms — Undyne Normal sp1 equivalent
var e_sp1 = {
	type: "spear",
	next_time: BEAT * 24,
	buffer_time: BEAT * 4,
	spear_interval: BEAT_MS * 1.5,
	next_sets: ["e_ag5"],
};

var e_ag5 = {
	type: "arrow", id: "e_ag5", next_time: BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,             speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT / 2,      speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT,          speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 3 / 2,  speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT * 2,      speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5 / 2,  speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT * 3,      speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 7 / 2,  speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 4,      speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT * 9 / 2,  speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5,      speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT * 11 / 2, speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 6,      speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT * 13 / 2, speed: 250 },
		{ direction: "3", turntype: 0, target_time: BEAT * 7,      speed: 250 },
		{ direction: "1", turntype: 0, target_time: BEAT * 15 / 2, speed: 250 },
	],
	next_sets: ["e_ag6"],
};

var e_ag6 = {
	type: "arrow", id: "e_ag6", next_time: BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,             speed: 300 },
		{ direction: "3", turntype: 0, target_time: BEAT / 2,      speed: 300 },
		{ direction: "1", turntype: 0, target_time: BEAT,          speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3 / 2,  speed: 300 },
		{ direction: "2", turntype: 0, target_time: BEAT * 2,      speed: 300 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5 / 2,  speed: 300 },
		{ direction: "1", turntype: 0, target_time: BEAT * 3,      speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7 / 2,  speed: 300 },
		{ direction: "2", turntype: 0, target_time: BEAT * 4,      speed: 300 },
		{ direction: "3", turntype: 0, target_time: BEAT * 9 / 2,  speed: 300 },
		{ direction: "1", turntype: 0, target_time: BEAT * 5,      speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 11 / 2, speed: 300 },
		{ direction: "2", turntype: 0, target_time: BEAT * 6,      speed: 300 },
		{ direction: "3", turntype: 0, target_time: BEAT * 13 / 2, speed: 300 },
		{ direction: "1", turntype: 0, target_time: BEAT * 7,      speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 15 / 2, speed: 300 },
	],
	next_sets: ["e_sp2"],
};

// ~480ms — Undyne Normal sp2 equivalent
var e_sp2 = {
	type: "spear",
	next_time: BEAT * 24,
	buffer_time: BEAT * 4,
	spear_interval: BEAT_MS * 1.2,
	next_sets: ["e_ag7"],
};

// Mixed quarter + 8th burst
var e_ag7 = {
	type: "arrow", id: "e_ag7", next_time: BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 0, target_time: 0,             speed: 250 },
		{ direction: "2", turntype: 0, target_time: BEAT,          speed: 250 },
		{ direction: "4", turntype: 0, target_time: BEAT * 2,      speed: 250 },
		{ direction: "2", turntype: 0, target_time: BEAT * 3,      speed: 250 },
		{ direction: "2", turntype: 0, target_time: BEAT * 7 / 2,  speed: 300 },
		{ direction: "3", turntype: 0, target_time: BEAT * 4,      speed: 300 },
		{ direction: "1", turntype: 0, target_time: BEAT * 9 / 2,  speed: 300 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5,      speed: 300 },
		{ direction: "1", turntype: 0, target_time: BEAT * 11 / 2, speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 6,      speed: 300 },
		{ direction: "2", turntype: 0, target_time: BEAT * 13 / 2, speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7,      speed: 300 },
	],
	next_sets: ["e_ag8"],
};

// Curving arrows
var e_ag8 = {
	type: "arrow", id: "e_ag8", next_time: BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 3, target_time: 0,        speed: 300 },
		{ direction: "3", turntype: 2, target_time: BEAT,     speed: 300 },
		{ direction: "2", turntype: 2, target_time: BEAT * 2, speed: 300 },
		{ direction: "1", turntype: 2, target_time: BEAT * 3, speed: 300 },
		{ direction: "4", turntype: 3, target_time: BEAT * 4, speed: 300 },
		{ direction: "3", turntype: 2, target_time: BEAT * 5, speed: 300 },
		{ direction: "2", turntype: 2, target_time: BEAT * 6, speed: 300 },
		{ direction: "1", turntype: 2, target_time: BEAT * 7, speed: 300 },
	],
	next_sets: ["e_sp1"],
};
