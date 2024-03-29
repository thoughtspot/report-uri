import * as mixpanel from 'mixpanel-browser';

export const config = {
    runtime: "experimental-edge",
};

export default async (req) => {
    console.log('loaded', mixpanel);
    return new Response(JSON.stringify({
        message: "success"
    }), {
        status: 200,
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    });
}