methods: {
    goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
}

//In Back button's click event call goBack() method