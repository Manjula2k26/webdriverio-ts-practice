pipeline{
    agent any
    stages{

        stage('checkout'){
            steps{
                checkout scm
            }
        }

        stage('Install Dependencies'){
            steps{
                bat 'npm install'
            }
        }

        stage('Run WebdriverIO tests')
        {
            steps
            {
                bat 'npm install'
            }
        }

        stage('Generate Allure Report')
        {
            steps
            {
                 bat 'npx allure generate allure-results --clean'
            }
        }

        stage('Archive Allure Report')
        {
            steps{
                  archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: false
            }
        }
    }
}