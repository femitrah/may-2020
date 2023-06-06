const minesweeper = [
    {
        data: [
            { id: 1, value: "💣", check: false },
            { id: 2, value: 1, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: 0, check: false },
            { id: 7, value: 0, check: false },
            { id: 8, value: 0, check: false },
            { id: 9, value: 0, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: "💣", check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: 0, check: false },
            { id: 8, value: 0, check: false },
            { id: 9, value: 0, check: false }

        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 1, check: false },
            { id: 3, value: "💣", check: false },
            { id: 4, value: 0, check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: 0, check: false },
            { id: 8, value: 0, check: false },
            { id: 9, value: 0, check: false }

        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: 1, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: "💣", check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: 0, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 1, check: false },
            { id: 9, value: 0, check: false }

        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: 1, check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: "💣", check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 1, check: false },
            { id: 9, value: 1, check: false }

        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 1, check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: 0, check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: 0, check: false },
            { id: 8, value: 1, check: false },
            { id: 9, value: 1, check: false }

        ]
    },

    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 0, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: 0, check: false },
            { id: 7, value: "💣", check: false },
            { id: 8, value: 1, check: false },
            { id: 9, value: 0, check: false }

        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 0, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: "💣", check: false },
            { id: 9, value: 1, check: false }

        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 0, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 1, check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 1, check: false },
            { id: 9, value: "💣", check: false }

        ],

    }, {
        data: [
            { id: 1, value: "💣", check: false },
            { id: 2, value: "💣", check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: 2, check: false },
            { id: 5, value: 2, check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: 0, check: false },
            { id: 8, value: 0, check: false },
            { id: 9, value: 0, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: "💣", check: false },
            { id: 3, value: "💣", check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 2, check: false },
            { id: 6, value: 2, check: false },
            { id: 7, value: 0, check: false },
            { id: 8, value: 0, check: false },
            { id: 9, value: 0, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: 2, check: false },
            { id: 3, value: "💣", check: false },
            { id: 4, value: "💣", check: false },
            { id: 5, value: 2, check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 1, check: false },
            { id: 9, value: 0, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: 2, check: false },
            { id: 3, value: 2, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: "💣", check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 2, check: false },
            { id: 9, value: 2, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 1, check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 2, check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: "💣", check: false },
            { id: 8, value: 2, check: false },
            { id: 9, value: 1, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 0, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: 2, check: false },
            { id: 5, value: 2, check: false },
            { id: 6, value: 1, check: false },
            { id: 7, value: "💣", check: false },
            { id: 8, value: "💣", check: false },
            { id: 9, value: 1, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 0, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: 1, check: false },
            { id: 5, value: 2, check: false },
            { id: 6, value: 2, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: "💣", check: false },
            { id: 9, value: "💣", check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: 2, check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: "💣", check: false },
            { id: 5, value: 2, check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 2, check: false },
            { id: 9, value: 1, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: "💣", check: false },
            { id: 2, value: "💣", check: false },
            { id: 3, value: "💣", check: false },
            { id: 4, value: 2, check: false },
            { id: 5, value: 3, check: false },
            { id: 6, value: 2, check: false },
            { id: 7, value: 0, check: false },
            { id: 8, value: 0, check: false },
            { id: 9, value: 0, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 2, check: false },
            { id: 2, value: "💣", check: false },
            { id: 3, value: "💣", check: false },
            { id: 4, value: "💣", check: false },
            { id: 5, value: 3, check: false },
            { id: 6, value: 2, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 1, check: false },
            { id: 9, value: 0, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 2, check: false },
            { id: 2, value: 3, check: false },
            { id: 3, value: "💣", check: false },
            { id: 4, value: "💣", check: false },
            { id: 5, value: "💣", check: false },
            { id: 6, value: 2, check: false },
            { id: 7, value: 2, check: false },
            { id: 8, value: 2, check: false },
            { id: 9, value: 1, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 2, check: false },
            { id: 2, value: 3, check: false },
            { id: 3, value: 2, check: false },
            { id: 4, value: "💣", check: false },
            { id: 5, value: "💣", check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: 2, check: false },
            { id: 8, value: 3, check: false },
            { id: 9, value: 2, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 1, check: false },
            { id: 2, value: 2, check: false },
            { id: 3, value: 2, check: false },
            { id: 4, value: 2, check: false },
            { id: 5, value: "💣", check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: "💣", check: false },
            { id: 8, value: 3, check: false },
            { id: 9, value: 2, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 1, check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: 2, check: false },
            { id: 5, value: 3, check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: "💣", check: false },
            { id: 8, value: "💣", check: false },
            { id: 9, value: 2, check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 0, check: false },
            { id: 2, value: 0, check: false },
            { id: 3, value: 0, check: false },
            { id: 4, value: 2, check: false },
            { id: 5, value: 3, check: false },
            { id: 6, value: 2, check: false },
            { id: 7, value: "💣", check: false },
            { id: 8, value: "💣", check: false },
            { id: 9, value: "💣", check: false }


        ]
    },
    {
        data: [
            { id: 1, value: "💣", check: false },
            { id: 2, value: 2, check: false },
            { id: 3, value: 1, check: false },
            { id: 4, value: 2, check: false },
            { id: 5, value: "💣", check: false },
            { id: 6, value: 2, check: false },
            { id: 7, value: 1, check: false },
            { id: 8, value: 2, check: false },
            { id: 9, value: "💣", check: false }


        ]
    },
    {
        data: [
            { id: 1, value: 2, check: false },
            { id: 2, value: "💣", check: false },
            { id: 3, value: 2, check: false },
            { id: 4, value: "💣", check: false },
            { id: 5, value: 4, check: false },
            { id: 6, value: "💣", check: false },
            { id: 7, value: 2, check: false },
            { id: 8, value: "💣", check: false },
            { id: 9, value: 2, check: false }


        ]
    },
]


export default minesweeper