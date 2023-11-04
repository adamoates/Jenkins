pipeline {
    agent any
    stages {
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
            steps {
                echo 'develop'          
            }
        }
        stage('staging') {
            steps {
                echo 'staging'
            }
        }
        stage('Prod') {
            steps {
                echo 'Prod'
            }
        }
    }
}