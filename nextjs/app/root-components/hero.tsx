import Image from "next/image";

export const Hero = () => {
  return (
    <>
    <Image
      src="/hero_1.png" // or a string for remote images
      alt="Background image"
      fill={true} // makes the image fill the parent
      sizes="100vw"
      style={{ objectFit: "cover" }} // ensures the image covers the container
      className="pointer-events-none"
    />
    <div style={{height: "100px"}}>test</div>
    
    </>
  );
};
