interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({
  children,
}: ContainerProps): React.ReactElement<ContainerProps> {
  return (
    <div
      className="
      max-w-[2520px]
      mx-auto
      h-full
      xl:px-20
      md:px-10
      sm:px-2
      px-4
    "
    >
      {children}
    </div>
  );
}
