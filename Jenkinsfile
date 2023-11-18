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
            when {
                enviroment  'BRANCH_NAME', value: 'develop'
            }
            steps {
                echo 'develop'          
            }
        }
        stage('staging') {
             when {
                enviroment  'BRANCH_NAME', value: 'staging'
            }
            steps {
                echo 'staging'
            }
        }
        stage('Prod') {
             when {
                enviroment  'BRANCH_NAME', value: 'master'
            }
            steps {
                echo 'master'
            }
        }
    }
}