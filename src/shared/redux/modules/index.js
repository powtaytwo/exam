import * as users from './user'

const modules = {
    users,
}

export const reducers = Object.keys(modules).reduce((acc, moduleKey) => {
    const module = modules[moduleKey]
    acc[moduleKey] = module.default

    return acc
}, {})

export default modules