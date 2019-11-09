    {
        "name": "portfolio",
        "alias": "portfolio.now.sh",
        "env": {
            "NODE_ENV": "production"
            "PORT": "8000"
            "HOST": "0.0.0.0",
            "DB_USER": "@[db_user]",
            "DB_PASS": "@[db_pass]",
            "DB_HOST": "@[db_host]",
            "DB_NAME": "@[db_name]",
            "DB_PORT": "27017"
        },
        "type": "static"
    }