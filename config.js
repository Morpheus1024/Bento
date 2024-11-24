// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Mikołaj',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '2a2020e6276d91517a7927a2f8f69baf', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'pl', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '54.352',
	defaultLongitude: '18.646',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'grip',
			id: '1',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Gmail',
					link: 'https://mail.google.com',
				},
				{
					name: 'Google Cal',
					link: 'https://calendar.google.com',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'Current project',
					link: 'https://github.com/Morpheus1024/genetic_algorythm',
				},
				{
					name: 'GitHub',
					link: 'https://github.com/',
				},
				{
					name: 'Zen',
					link: 'https://github.com/zen-browser/desktop',
				},
				{
					name: 'Dotfiles :3',
					link: 'https://github.com/Morpheus1024/dotfiles',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'chart-network',
			id: '1',
			links: [
				{
					name: 'HopHop',
					link: 'https://hophop.pomagier.info:81/login',
				},
				{
					name: 'Confluence',
					link: 'https://montessori.atlassian.net/wiki/home',
				},
				{
					name: 'OutLook',
					link: 'https://www.https://montessori.atlassian.net/wiki/home.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'bot',
			id: '2',
			links: [
				{
					name: 'HMI zimny',
					link: 'http://172.20.20.198:5005/',
				},
				{
					name: 'HMI ciepły',
					link: 'http://172.20.20.198:5006/',
				},
				{
					name: '1',
					link: '',
				},
				{
					name: '2',
					link: '',
				},
			],
		},
	],
};
