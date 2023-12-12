type Params = {
    ednpoint: string,
    data: any,
}

export async function post({ednpoint, data}: Params) {
    try {
        return await fetch('/api/' + ednpoint, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
        })
    } catch (error) {
        return {error}
    }
}