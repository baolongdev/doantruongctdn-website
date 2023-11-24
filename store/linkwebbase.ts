
let hostname;
if (typeof window !== 'undefined') { 
    hostname = window.location.origin;
}


const urlbase = hostname || 'https://doantruongctdn-website.vercel.app/'; // Provide a default value if hostname is undefined

export default urlbase;
