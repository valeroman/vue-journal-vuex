// El state es reactivo y cuando se cambia, se le notifica a todos los componentes que esten escuchando
export default () => ({
    isLoading: true,
    entries: [{
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Reprehenderit et ipsum laborum qui tempor laborum nulla deserunt velit. Eiusmod enim dolore est id ut sunt officia eiusmod ex exercitation tempor esse. Cillum commodo aliquip cillum deserunt ullamco veniam est minim nisi. Cillum minim tempor nisi occaecat nulla occaecat Lorem dolor.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Eu eiusmod nisi incididunt in anim exercitation velit anim nisi elit voluptate qui proident. Proident consectetur pariatur amet aliquip adipisicing Lorem aute laborum aliqua occaecat fugiat pariatur. Tempor fugiat aliqua aute cillum id sunt aute proident ex aliquip ad.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Est non quis do culpa officia qui est do et velit cillum. Consectetur quis proident sit mollit ipsum consectetur eiusmod consequat et nulla quis labore fugiat. Lorem in amet culpa nulla duis duis.',
            picture: null
        }
    ]
})