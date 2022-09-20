import Image from "next/future/image";

export default function Profile() {
  return (
    <div className="mx-auto max-w-6xl pt-20 text-center">
      <h1>Jared Palmer</h1>
      <p>Twitter: @jaredpalmer</p>
      <Image
        src={
          "https://pbs.twimg.com/profile_images/1499797140654243845/AQ9QBtI6_400x400.jpg"
        }
        alt=""
        className="rounded-3xl"
        width={400}
        height={400}
      />
    </div>
  );
}
