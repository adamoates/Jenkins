pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'build'
            }
        }
        stage('develop') {
            steps {
                echo 'develop'
                sh ''' 
                    MSG='Hello World 
                    (
                        echo MSG
                    )
                ''''
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