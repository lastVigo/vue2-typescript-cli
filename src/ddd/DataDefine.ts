export default class DataDefine {
  name: string = ''
  href: string = ''
  target: string = '_blank'
  constructor (name: string, href: string, target: string) {
    this.name = name
    this.href = href
    this.target = target
  }
}
