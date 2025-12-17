import Image from "next/image";

const HouseOfHerrera = () => {
  return (
    <section className=" text-start">
      <div className="flex justify-center mb-6">
        <Image
          src="/images/house-of-herrera.webp"
          alt="House of Herrera Family Crest"
          width={300}
          height={400}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRhIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAAQAcJaQAA3AA/vuUAAA=" 
          className="object-contain w-full md:h-[400px] sm:h-[300px]"
        />
      </div>
      <h2 className="text-[22px] font-semibold mb-4">
        The Family Crest of House of Herrera
      </h2>
      <p className="text-gray-500 leading-relaxed mb-3">
        The House of Herrera is a union of eminent families with diverse
        nationalities, that have left their mark throughout various parts of
        Europe and Latin America for over six centuries.
      </p>
      <p className="text-gray-500 leading-relaxed">
        The House of Herrera has extensively influenced international trade and
        was largely responsible for pioneering the earliest known banking system
        in Latin America. The long-standing influence of the Herrera Dynasty has
        been acknowledged by the high levels of trust harboured over generations.
      </p>
    </section>
  );
};

export default HouseOfHerrera;
