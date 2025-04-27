import FooterLinks from "../parts/Footer/FooterLinks";
import FooterNavs from "../parts/Footer/FooterNavs";
import LogoBar from "../parts/common/LogoBar";

const Footer = () => {
	return (
		<footer className="bg-white font-notoSans">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div className="flex justify-center lg:justify-between mx-8 lg:mx-24">
					<div className="hidden lg:flex items-center">
						<LogoBar />
					</div>
					<div className="flex flex-wrap justify-between gap-y-4 md:gap-y-0 md:gap-x-16">
						<FooterNavs
							linkHeading="SNS"
							links={["Instagram", "Discord"]}
							href={[
								"https://instagram.com/keio_easylist?igshid=MmJiY2I4NDBkZg==",
								"https://discord.com/channels/1126311403914018856/1126311404765446212",
							]}
						/>
						<FooterLinks
							linkHeading="授業情報"
							links={["楽単リスト", "履修の組み方"]}
							href={["/rakutan", "/courses"]}
						/>
						<FooterNavs
							linkHeading="オープンチャット"
							links={[
								"一般教養",
								"文学部",
								"経済学部",
								"法学部法学科",
								"法学部政治学科",
								"商学部",
								"理工学部",
							]}
							href={[
								"https://line.me/ti/g2/blzJBWWmrCi3EUzYB2uSVA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
								"https://line.me/ti/g2/UG3gRwBh1NlG8gyazdIuew?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
								"https://line.me/ti/g2/d6j8PzHqHFAR8LdUUOkujw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
								"https://line.me/ti/g2/KNg0Pb1dTckxFCQHi7XEdA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
								"https://line.me/ti/g2/usWeUPzHFq_AYyeKVRJCMg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
								"https://line.me/ti/g2/-OU6WingNY6uzUINLMmboQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
								"https://line.me/ti/g2/Kj4Y27WTV7sKo-GcNqOtZg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
							]}
						/>
						<FooterLinks
							linkHeading="About Us"
							links={["Our Team", "Contact", "Plivacy Policy"]}
							href={["/aboutus", "/contact", "/aboutus/policy"]}
						/>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center justify-center">
					<p className="text-sm text-center text-gray-500">
						© 2023 KEIO EASYLIST . All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
