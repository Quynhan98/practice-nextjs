export interface INinjas {
  address: {
    city: string
    geo: { lat: string; lng: string }
    street: string
    suite: string
    zipcode: string
  }
  company: { bs: string; catchPhrase: string; name: string }
  email: string
  name: string
  phone: string
  username: string
  website: string
  id: string
}
