const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    ...colors.red,
                    '500': "#791535",
                    '900': "#4b0d0d",
                },
                grey: {
                    '100': "#faf7f7",
                    '500': "#ac8d8d",
                    '600': "#634949",
                },
                darkprimary: {
                    '100': "#4e1024",
                    '200': "#320000",
                }
            },
            width: {
                "3/20": "15%",
                "2/15": "13.333333%",
                "1/9": "11.111111%",
                "2/21": "9.523809%",
            },
            spacing: {
                '36': '9rem',
                '44': '11rem',
            }
        },
        boxShadow: {
            'default': '0 4px 8px 0 rgba(0,0,0,0.04)',
            md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            lg: ' 0 10px 15px -3px rgba(0, 0, 0, .09), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            xl: ' 0 20px 25px -5px rgba(0, 0, 0, .08), 0 10px 10px -5px rgba(0, 0, 0, .04)',
        },
        opacity: {
            '0': '0',
            '10': '.1',
            '20': '.2',
            '30': '.3',
            '40': '.4',
            '50': '.5',
            '60': '.6',
            '70': '.7',
            '80': '.8',
            '90': '.9',
            '100': '1',
        }
    },
    variants: {},
    plugins: []
}
