// Normal (medium) difficulty — Undyne Hard equivalent (148 BPM)
// Speeds 150-400, spears BEAT_MS (~405ms) → BEAT_MS*0.75 (~300ms)

var m_ag1 = {
	type: "arrow", id: "m_ag1", next_time: BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,        speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT,     speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 2, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 3, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 4, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 5, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 6, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 7, speed: 150 },
	],
	next_sets: ["m_ag2"],
};

var m_ag2 = {
	type: "arrow", id: "m_ag2", next_time: BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,        speed: 200 },
		{ direction: "$3", turntype: 0, target_time: BEAT,     speed: 200 },
		{ direction: "$2", turntype: 0, target_time: BEAT * 2, speed: 200 },
		{ direction: "$2", turntype: 0, target_time: BEAT * 3, speed: 200 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 4, speed: 200 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 5, speed: 200 },
		{ direction: "$3", turntype: 0, target_time: BEAT * 6, speed: 200 },
		{ direction: "$4", turntype: 0, target_time: BEAT * 7, speed: 200 },
	],
	next_sets: ["m_ag3"],
};

var m_ag3 = {
	type: "arrow", id: "m_ag3", next_time: BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,        speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT,     speed: 300 },
		{ direction: "2", turntype: 0, target_time: BEAT * 2, speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3, speed: 300 },
		{ direction: "4", turntype: 0, target_time: BEAT * 4, speed: 300 },
		{ direction: "2", turntype: 0, target_time: BEAT * 5, speed: 300 },
		{ direction: "2", turntype: 0, target_time: BEAT * 6, speed: 300 },
		{ direction: "1", turntype: 0, target_time: BEAT * 7, speed: 300 },
	],
	next_sets: ["m_ag4"],
};

var m_ag4 = {
	type: "arrow", id: "m_ag4", next_time: BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,        speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT,     speed: 400 },
		{ direction: "3", turntype: 0, target_time: BEAT * 2, speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3, speed: 400 },
		{ direction: "1", turntype: 0, target_time: BEAT * 4, speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 5, speed: 400 },
		{ direction: "3", turntype: 0, target_time: BEAT * 6, speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7, speed: 400 },
	],
	next_sets: ["m_sp1"],
};

// ~405ms — Undyne Hard sp3 equivalent
var m_sp1 = {
	type: "spear",
	next_time: BEAT * 24,
	buffer_time: BEAT * 4,
	spear_interval: BEAT_MS,
	next_sets: ["m_ag5"],
};

var m_ag5 = {
	type: "arrow", id: "m_ag5", next_time: BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,             speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT / 2,      speed: 350 },
		{ direction: "1", turntype: 0, target_time: BEAT,          speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT * 3 / 2,  speed: 350 },
		{ direction: "1", turntype: 0, target_time: BEAT * 2,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5 / 2,  speed: 350 },
		{ direction: "1", turntype: 0, target_time: BEAT * 3,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT * 7 / 2,  speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT * 4,      speed: 350 },
		{ direction: "1", turntype: 0, target_time: BEAT * 9 / 2,  speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5,      speed: 350 },
		{ direction: "1", turntype: 0, target_time: BEAT * 11 / 2, speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT * 6,      speed: 350 },
		{ direction: "1", turntype: 0, target_time: BEAT * 13 / 2, speed: 350 },
		{ direction: "3", turntype: 0, target_time: BEAT * 7,      speed: 350 },
		{ direction: "1", turntype: 0, target_time: BEAT * 15 / 2, speed: 350 },
	],
	next_sets: ["m_ag6"],
};

var m_ag6 = {
	type: "arrow", id: "m_ag6", next_time: BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,             speed: 400 },
		{ direction: "3", turntype: 0, target_time: BEAT / 2,      speed: 400 },
		{ direction: "1", turntype: 0, target_time: BEAT,          speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 3 / 2,  speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 2,      speed: 400 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5 / 2,  speed: 400 },
		{ direction: "1", turntype: 0, target_time: BEAT * 3,      speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7 / 2,  speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 4,      speed: 400 },
		{ direction: "3", turntype: 0, target_time: BEAT * 9 / 2,  speed: 400 },
		{ direction: "1", turntype: 0, target_time: BEAT * 5,      speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 11 / 2, speed: 400 },
		{ direction: "2", turntype: 0, target_time: BEAT * 6,      speed: 400 },
		{ direction: "3", turntype: 0, target_time: BEAT * 13 / 2, speed: 400 },
		{ direction: "1", turntype: 0, target_time: BEAT * 7,      speed: 400 },
		{ direction: "4", turntype: 0, target_time: BEAT * 15 / 2, speed: 400 },
	],
	next_sets: ["m_sp2"],
};

// ~300ms — Undyne Hard sp4 equivalent
var m_sp2 = {
	type: "spear",
	next_time: BEAT * 24,
	buffer_time: BEAT * 4,
	spear_interval: BEAT_MS * 0.75,
	next_sets: ["m_ag7"],
};

// Mixed quarter + 8th burst
var m_ag7 = {
	type: "arrow", id: "m_ag7", next_time: BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 0, target_time: 0,             speed: 350 },
		{ direction: "2", turntype: 0, target_time: BEAT,          speed: 350 },
		{ direction: "4", turntype: 0, target_time: BEAT * 2,      speed: 350 },
		{ direction: "2", turntype: 0, target_time: BEAT * 3,      speed: 350 },
		{ direction: "2", turntype: 0, target_time: BEAT * 7 / 2,  speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 4,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 9 / 2,  speed: 450 },
		{ direction: "3", turntype: 0, target_time: BEAT * 5,      speed: 450 },
		{ direction: "1", turntype: 0, target_time: BEAT * 11 / 2, speed: 450 },
		{ direction: "4", turntype: 0, target_time: BEAT * 6,      speed: 450 },
		{ direction: "2", turntype: 0, target_time: BEAT * 13 / 2, speed: 450 },
		{ direction: "4", turntype: 0, target_time: BEAT * 7,      speed: 450 },
	],
	next_sets: ["m_ag8"],
};

// Curving arrows
var m_ag8 = {
	type: "arrow", id: "m_ag8", next_time: BEAT * 8,
	arrows: [
		{ direction: "4", turntype: 3, target_time: 0,        speed: 400 },
		{ direction: "3", turntype: 2, target_time: BEAT,     speed: 400 },
		{ direction: "2", turntype: 2, target_time: BEAT * 2, speed: 400 },
		{ direction: "1", turntype: 2, target_time: BEAT * 3, speed: 400 },
		{ direction: "4", turntype: 3, target_time: BEAT * 4, speed: 400 },
		{ direction: "3", turntype: 2, target_time: BEAT * 5, speed: 400 },
		{ direction: "2", turntype: 2, target_time: BEAT * 6, speed: 400 },
		{ direction: "1", turntype: 2, target_time: BEAT * 7, speed: 400 },
	],
	next_sets: ["m_sp1"],
};
