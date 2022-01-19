import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'
import cloudinary from 'cloudinary'


cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: ''

})

describe('Pruebas en el uploadImage', () => {

    test('debe de cargar un archivo y retornar el url', async(done) => {

        const { data } = await axios.get('https://res.cloudinary.com/dddudqtmm/image/upload/v1639107826/zxcjr1wt2a1s37prwnxp.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')

        const url = await uploadImage(file)

        expect(typeof url).toBe('string')

        console.log(url)
            // tomar el id de la url
        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.jpg', '')
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done()
        })

    })

})