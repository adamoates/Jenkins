pipeline {
    agent any
    node {
        checkout scm
    }
    stages {
        stage('build') {
            steps {
                echo 'build'
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