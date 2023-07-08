import { Avatar } from 'antd';
interface AvatarProps {
  src?: string | null | undefined;
  alt?: string | null | undefined;
}

export default function UserAvatar({ src, alt }: AvatarProps) {
  const imgSrc = src || "/images/no-avatar.png";
  const imgAlt = alt || "Empty avatar";
  return (
    <Avatar src={imgSrc} alt={imgAlt} size={36} className='border-solid border-2 border-slate-500'/>
  );
}
