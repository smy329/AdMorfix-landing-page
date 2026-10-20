export default function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-5 sm:px-8 lg:px-10 ${className}`} {...props}>
      {children}
    </Tag>
  )
}
