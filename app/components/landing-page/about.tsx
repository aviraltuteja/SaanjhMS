export default function AboutUs(): React.ReactElement {
  return (
    <div className="w-screen min-h-[60vh] overflow-hidden bg-white flex flex-col px-8 md:px-60 py-20 items-center gap-20">
      <div className="text-3xl md:text-4xl font-bold text-blackshade">
        About Us
      </div>
      <div className="flex flex-col gap-8">
        <div className="text-base md:text-lg 2xl:text-xl text-blackshade text-justify">
          At <span className="text-primary">Saanjh</span>, we believe marriage
          is a sacred bond rooted in love, family, and shared values. Our
          platform is designed to help you find a partner who respects your
          traditions and dreams.
        </div>
        <div className="text-base md:text-lg 2xl:text-xl text-blackshade text-justify">
          <span className="text-primary">Saanjh</span> was created to celebrate
          the beauty of Indian marriages. We understand the importance of
          finding a partner who aligns with your values, whether it’s through
          shared traditions, family expectations, or compatibility. Our mission
          is to make your journey to love simple, secure, and meaningful.
        </div>
      </div>
    </div>
  );
}
