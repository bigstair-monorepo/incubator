
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			'phone-xs': { 'max': '320px' }, // Target only very small phones
			'phone-sm': { 'min': '321px', 'max': '375px' }, // Target small phones only
			'phone-md': { 'min': '376px', 'max': '425px' }, // Target medium phones only
			'tablet': { 'min': '426px', 'max': '768px' }, // Target tablets only
			'laptop': '1024px', // Target laptops and above
			'desktop': '1280px', // Target desktops and above
		},

		extend: {
			colors: {
				primary: '#FFAD0F',
				black: '#000',
				greyShingle: '#939393',
				hey: '#9494'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif', 'Inter Thin', 'Inter Light', 'Inter Medium', 'Inter SemiBold', 'Inter Bold', 'Inter ExtraBold', 'Inter Black'],
			},
			textUnderlineOffset: {
				3: '3px',
			}
		},
	},
	plugins: [
	]
};
