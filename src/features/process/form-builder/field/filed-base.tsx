import { cn } from "@/shared/lib/css";
import { Label } from "@/shared/ui/label";

export const BaseLabel = ({
  className,
  id,
  error,
  ...props
}: {
  error?: string;
  className?: string;
  id: string;
} & React.HTMLAttributes<HTMLLabelElement>) => {
  return (
    <Label
      className={cn(error && "text-destructive", className)}
      htmlFor={id}
      {...props}
    />
  );
};

export function BaseDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
}

export const BaseMessage = ({
  className,
  children,
  error,
  ...props
}: { error?: string } & React.HTMLAttributes<HTMLParagraphElement>) => {
  const body = error ? String(error) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
};
