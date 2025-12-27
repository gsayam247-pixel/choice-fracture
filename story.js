const story = {
    start: {
        text: "You wake up inside an archive. A voice says: 'You’ve been here before. You just don’t remember.'",
        choices: [
            { text: "Ask who the voice is", next: "voice", effect: { curiosity: 1 } },
            { text: "Stay silent", next: "silent", effect: { obedience: 1 } }
        ]
    },

    voice: {
        text: "The voice pauses. 'You always ask that first. Interesting.'",
        choices: [
            { text: "Demand answers", next: "demand", effect: { morality: -1 } },
            { text: "Listen quietly", next: "listen", effect: { trust: 1 } }
        ]
    },

    silent: {
        text: "Silence. The system logs your compliance.",
        choices: [
            { text: "Wait", next: "listen", effect: { obedience: 2 } }
        ]
    },

    demand: {
        text: "‘Aggression noted,’ the voice says. The lights dim.",
        choices: [
            { text: "Apologize", next: "listen", effect: { trust: 1 } },
            { text: "Double down", next: "end_bad", effect: { morality: -2 } }
        ]
    },

    listen: {
        text: "‘Good. Some versions of you never learn.’",
        choices: [
            { text: "Ask what this place is", next: "truth" },
            { text: "Say nothing", next: "end_neutral" }
        ]
    },

    truth: {
        text: "‘This archive stores failed timelines. Including yours.’",
        choices: [
            { text: "Accept it", next: "end_good" },
            { text: "Reject it", next: "end_bad" }
        ]
    },

    end_good: {
        text: "The archive unlocks. This time, you might survive.",
        choices: []
    },

    end_neutral: {
        text: "The system shuts down. Uncertain outcomes remain.",
        choices: []
    },

    end_bad: {
        text: "Record saved. Another failure added to the archive.",
        choices: []
    }
};