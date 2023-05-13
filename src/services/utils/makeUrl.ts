type MakeUrlOptions = {
  requiredParams?: Record<string, unknown>
}

export class MakeUrlBuilder {
  private url = ''
  private options: MakeUrlOptions = {}
  private isFirstParam = true

  private applyRequiredParams() {
    !!this.options?.requiredParams &&
      Object.entries(this.options?.requiredParams).forEach(([parameter, value]) => this.addQueryParam(parameter, value))
  }

  interpolate(params: Record<string, unknown>) {
    this.url = Object.entries(params).reduce(
      (path, [parameter, value]) => path.replace(`:${parameter}`, String(value)),
      this.url,
    )

    return this
  }

  constructor(template: string) {
    this.url = template
  }

  addQueryParam(param: string, value: unknown) {
    if (!value) {
      return this
    }

    const ligature = this.isFirstParam ? '?' : '&'
    const parsedValue = Array.isArray(value) ? value.join(',') : value

    this.url = [this.url, `${param}=${parsedValue}`].join(ligature)

    return this
  }

  build() {
    this.applyRequiredParams()

    return this.url
  }
}

export const makeUrl = (template: string) => new MakeUrlBuilder(template)
