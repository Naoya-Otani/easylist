import LogoBar from "../parts/common/LogoBar";
import FooterLinks from "../parts/Footer/FooterLinks";

const Footer = () => {
  return (
    <footer className="bg-white font-notoSans">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="md:ml-4 mb-6 md:mb-0 flex justify-center">
            <LogoBar />
          </div>
          <div className="mr-8 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterLinks
              linkHeading="授業情報"
              links={["楽単リスト", "履修の組み方"]}
              href={["/rakutan", "/courses"]}
            />
            <FooterLinks
              linkHeading="SNS"
              links={["Instagram"]}
              href={[
                "https://instagram.com/keio_easylist?igshid=MmJiY2I4NDBkZg==",
              ]}
            />
            <FooterLinks
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
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center justify-center">
          <span className="text-sm text-gray-500">
            © 2023 KEIO EASYLIST . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
