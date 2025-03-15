
import { Background } from "./Background";
import { Flex } from "./Flex";

const PageBackground = () => {
  return (
    <Flex
      fill
      minHeight={16}
      position="relative"
      radius="l"
      className="absolute inset-0 -z-10"
    >
      <Background
        position="absolute"
        mask={{
          cursor: true
        }}
        gradient={{
          colorEnd: 'static-transparent',
          colorStart: 'accent-solid-strong',
          display: true,
          height: 100,
          opacity: 100,
          tilt: 0,
          width: 150,
          x: 0,
          y: 0
        }}
        dots={{
          color: 'accent-on-background-medium',
          display: false,
          opacity: 100,
          size: '64'
        }}
        grid={{
          color: 'neutral-alpha-medium',
          display: false,
          height: 'var(--static-space-32)',
          opacity: 100,
          width: 'var(--static-space-32)'
        }}
        lines={{
          display: false,
          opacity: 100,
          size: '24'
        }}
      />
    </Flex>
  );
};

export { PageBackground };
