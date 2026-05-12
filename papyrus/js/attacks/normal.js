// Normal (medium) difficulty — Bonetrousle 150 BPM, P_BEAT = 0.4s
// Papyrus-style: vertical bone rows, cross-cycling, LR→TB reversed from easy
// Speeds 150-400, spears P_BEAT_MS (~400ms) → P_BEAT_MS*0.75 (~300ms)

// Tutorial: all player-tracking
var p_m_ag1 = {
	type: "arrow", id: "p_m_ag1", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,          speed: 150 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT,     speed: 150 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 2, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 3, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 4, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 5, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 6, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 7, speed: 150 },
	],
	next_sets: ["p_m_ag2"],
};

// Mixed tracking: center, then sides alternating
var p_m_ag2 = {
	type: "arrow", id: "p_m_ag2", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0,          speed: 200 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT,     speed: 200 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 2, speed: 200 },
		{ direction: "$4", turntype: 0, target_time: P_BEAT * 3, speed: 200 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 4, speed: 200 },
		{ direction: "$2", turntype: 0, target_time: P_BEAT * 5, speed: 200 },
		{ direction: "$4", turntype: 0, target_time: P_BEAT * 6, speed: 200 },
		{ direction: "$3", turntype: 0, target_time: P_BEAT * 7, speed: 200 },
	],
	next_sets: ["p_m_ag3"],
};

// Left-right sweep with top-bottom surprise at the end
var p_m_ag3 = {
	type: "arrow", id: "p_m_ag3", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,          speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT,     speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 2, speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 3, speed: 300 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 4, speed: 300 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5, speed: 300 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 6, speed: 300 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 7, speed: 300 },
	],
	next_sets: ["p_m_ag4"],
};

// Bone rows: 4 from top, 4 from bottom
var p_m_ag4 = {
	type: "arrow", id: "p_m_ag4", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0,          speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT,     speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 2, speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 3, speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 4, speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5, speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 6, speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 7, speed: 400 },
	],
	next_sets: ["p_m_sp1"],
};

// ~400ms
var p_m_sp1 = {
	type: "spear",
	next_time: P_BEAT * 24,
	buffer_time: P_BEAT * 4,
	spear_interval: P_BEAT_MS,
	next_sets: ["p_m_ag5"],
};

// 8th-note top-bottom alternating (up-down sweep)
var p_m_ag5 = {
	type: "arrow", id: "p_m_ag5", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,               speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT / 2,      speed: 350 },
		{ direction: "1", turntype: 0, target_time: P_BEAT,          speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 3 / 2,  speed: 350 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 2,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 5 / 2,  speed: 350 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 3,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 350 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 4,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 350 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 350 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 6,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 350 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 7,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 15 / 2, speed: 350 },
	],
	next_sets: ["p_m_ag6"],
};

// 8th-note four-direction cycle: 1/4/2/3
var p_m_ag6 = {
	type: "arrow", id: "p_m_ag6", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0,               speed: 400 },
		{ direction: "4", turntype: 0, target_time: P_BEAT / 2,      speed: 400 },
		{ direction: "2", turntype: 0, target_time: P_BEAT,          speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 3 / 2,  speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 2,      speed: 400 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 5 / 2,  speed: 400 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 3,      speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 4,      speed: 400 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 400 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 5,      speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 400 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 6,      speed: 400 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 400 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 7,      speed: 400 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 15 / 2, speed: 400 },
	],
	next_sets: ["p_m_sp2"],
};

// ~300ms
var p_m_sp2 = {
	type: "spear",
	next_time: P_BEAT * 24,
	buffer_time: P_BEAT * 4,
	spear_interval: P_BEAT_MS * 0.75,
	next_sets: ["p_m_ag7"],
};

// Quarter left-right then 8th top-bottom burst (inverted from easy's p_ag7)
var p_m_ag7 = {
	type: "arrow", id: "p_m_ag7", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0,               speed: 350 },
		{ direction: "4", turntype: 0, target_time: P_BEAT,          speed: 350 },
		{ direction: "2", turntype: 0, target_time: P_BEAT * 2,      speed: 350 },
		{ direction: "4", turntype: 0, target_time: P_BEAT * 3,      speed: 350 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 7 / 2,  speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 4,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 9 / 2,  speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 5,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 11 / 2, speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 6,      speed: 450 },
		{ direction: "3", turntype: 0, target_time: P_BEAT * 13 / 2, speed: 450 },
		{ direction: "1", turntype: 0, target_time: P_BEAT * 7,      speed: 450 },
	],
	next_sets: ["p_m_ag8"],
};

// Curving arrows: 1→2→3→4 cycle
var p_m_ag8 = {
	type: "arrow", id: "p_m_ag8", next_time: P_BEAT * 8,
	arrows: [
		{ direction: "1", turntype: 2, target_time: 0,          speed: 400 },
		{ direction: "2", turntype: 3, target_time: P_BEAT,     speed: 400 },
		{ direction: "3", turntype: 2, target_time: P_BEAT * 2, speed: 400 },
		{ direction: "4", turntype: 3, target_time: P_BEAT * 3, speed: 400 },
		{ direction: "1", turntype: 2, target_time: P_BEAT * 4, speed: 400 },
		{ direction: "2", turntype: 3, target_time: P_BEAT * 5, speed: 400 },
		{ direction: "3", turntype: 2, target_time: P_BEAT * 6, speed: 400 },
		{ direction: "4", turntype: 3, target_time: P_BEAT * 7, speed: 400 },
	],
	next_sets: ["p_m_sp1"],
};
