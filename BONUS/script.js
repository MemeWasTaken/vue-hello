const app = new Vue(
    {
        el: '#containerVue',
        data: {
            message: '',
            linkImg: 'https://picsum.photos/300/200',
            numProd: Math.floor(Math.random() * 101),
        }
    }
);