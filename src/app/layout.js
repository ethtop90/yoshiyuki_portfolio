import "./globals.css";

export const metadata = {
	title: "JF | Portfolio",
	description:
		"I'm a forward-thinking Full-Stack Web3 Developer, who thrives in the face of challenges and embodies an unwavering commitment to lifelong learning.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className=" bg-background">{children}</body>
		</html>
	);
}
