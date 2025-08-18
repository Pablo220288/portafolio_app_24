'use client';;
import { cn } from '@/lib/utils';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export const Glimpse = (props) => {
  return <HoverCard {...props} />;
};

export const GlimpseContent = (props) => (
  <HoverCardContent {...props} />
);

export const GlimpseTrigger = (props) => (
  <HoverCardTrigger {...props} />
);

export const GlimpseTitle = ({
  className,
  ...props
}) => {
  return (<p className={cn('truncate font-semibold text-sm', className)} {...props} />);
};

export const GlimpseDescription = ({
  className,
  ...props
}) => {
  return (
    (<p
      className={cn('line-clamp-2 text-muted-foreground text-sm', className)}
      {...props} />)
  );
};

export const GlimpseImage = ({
  className,
  alt,
  ...props
}) => (
  // biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic"
  (<img
    alt={alt ?? ''}
    className={cn('mb-4 aspect-[120/63] w-full rounded-md border object-cover', className)}
    {...props} />)
);