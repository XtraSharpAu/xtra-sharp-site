import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { SocialIcons } from "@/components/SocialIcons";

export function FollowUsSection() {
  return (
    <Section className="border-t border-metallic/40 text-center">
      <SectionHeading
        title="Follow Xtra Sharp"
        subtitle="Stay updated with sharpening tips, service updates and new posts."
      />
      <div className="flex justify-center">
        <SocialIcons />
      </div>
    </Section>
  );
}
