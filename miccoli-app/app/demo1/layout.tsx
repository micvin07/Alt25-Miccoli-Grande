export default function Demo1Layout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <a href="/demo1">Demo1</a>
      <a href="/demo1/sub1">Sub1</a>
      <a href="/demo1/sub2" >Sub2</a>
      <hr/>
      {children}
    </div>
  )
}