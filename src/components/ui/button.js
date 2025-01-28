export const Button = ({ children, variant = "default", className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-all";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};