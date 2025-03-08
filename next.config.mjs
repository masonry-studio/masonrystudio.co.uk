/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "placehold.co",
			},
			{
				hostname: "github.com",
			},
			{
				hostname: "tygr.dev",
			},
		],
	},
};

export default nextConfig;
