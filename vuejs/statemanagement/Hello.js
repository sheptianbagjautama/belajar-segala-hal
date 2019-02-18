export const Hello = { 
    template: `
        <p>
            State counter pada hello : 
            {{ counter }} 
        </p>
    `,
    computed: {
        counter(){
            return store.state.counter
        }
    } 
}