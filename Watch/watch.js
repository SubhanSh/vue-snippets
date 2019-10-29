watch: {
    '$route' (to, from) {
        if(to !== from ) {
            this.fetchLink = this.apiLinkPrefix + this.$router.currentRoute.fullPath;
            this.fetchProduct();
        }
    }
},