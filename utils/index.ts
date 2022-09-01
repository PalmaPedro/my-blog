export const sortByDate = (a:any, b: any) => {
  //return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  return Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
}

