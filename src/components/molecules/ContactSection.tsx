import { PhoneNumber } from '../atoms/PhoneNumber';
import { SocialIcons } from '../atoms/SocialIcons';

export const ContactSection = () => {
  return (
    <div id="kontakt" className="scroll-smooth	py-8 md:py-18 xl:py-34">
      <div className="flex flex-col items-center gap-6">
        <p className="tracking-widest	text-lg md:text-2xl">
          Zadzwoń już teraz!!!
        </p>
        <PhoneNumber invert number="733 726 236" />
        <SocialIcons
          facebook="https://www.facebook.com"
          instagram="https://www.instagram.com"
        />
      </div>
    </div>
  );
};
