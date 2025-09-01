const Card = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card shadow-sm
      ${className}`}
    {...props}
  />
);
const CardHeader = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6
      ${className}`}
    {...props}
  />
);
const CardFooter = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0
      ${className}`}
    {...props}
  />
);
const CardTitle = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight
      ${className}`}
    {...props}
  />
);
const CardDescription = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm text-muted-foreground
      ${className}`}
    {...props}
  />
);
const CardContent = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`p-6 pt-0
      ${className}`}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
