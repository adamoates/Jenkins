pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                echo 'checkout'  
            }
        }
        stage('build') {
            steps {
                echo 'build'
            }
        }
        stage('test') {
            steps {
                sh 'make check || true'
            }
        }
        stage('develop') {
            when {
                environment name: 'BRANCH_NAME',  value: 'develop'
            }
            steps {
                echo 'develop'          
            }
        }
        stage('staging') {
             when {
                environment name: 'BRANCH_NAME', value: 'staging'
            }
            steps {
                echo 'staging'
            }
        }
        stage('Prod') {
             when {
                environment name: 'BRANCH_NAME', value: 'master'
            }
            steps {
                echo 'master'
            }
        }
    }
}