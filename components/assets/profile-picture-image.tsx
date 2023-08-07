import Image from "next/image";

export function ProfilePictureImage() {
  return <Image src="/profile-picture.png" alt="me" width={50} height={50} />;
}
