import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions
} from 'react-native'

import { ActivityIndicator, MyDatePicker, Screen, DateCard, AppText } from '../components'
import colors from '../config/colors'
import recordApi from '../api/record'
import { VictoryLine, VictoryTheme, VictoryChart, VictoryLegend, VictoryAxis, VictoryScatter, VictoryLabel } from 'victory-native'
import moment from 'moment'

function ReportScreen ({ navigation }) {
  const [isLoading, setisLoading] = useState(false)

  const [record, setRecord] = useState([])

  useEffect(() => {
    loadRecord()
  }, [])

  const loadRecord = async () => {
    setisLoading(true)

    const response = await recordApi.getRecord()

    setisLoading(false)

    setRecord(response.data)
  }

  const [graphData, setGraphData] = useState([])

  useEffect(() => {
    loadGraphData()
  }, [])

  const loadGraphData = async () => { 
    setisLoading(true)

    const graphDataResult = await recordApi.getGraphRecord()
    setisLoading(false)

    setGraphData(graphDataResult.data.data)
  }

  // Refresh

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  const [refreshing, setRefreshing] = useState(false)

  // call api for refresh
  const onRefresh = async () => {
    const graphDataResult = await recordApi.getGraphRecord()
    setGraphData(graphDataResult.data.data)
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }

  return (
    <Screen>

      <View>
        <ActivityIndicator visible={isLoading} size={43} />

        <View style={styles.scrollView}>

          {/* Visuallization */}
          <View style={styles.date}>
            {/* <MyDatePicker style={styles.startdate} />
            <MyDatePicker style={styles.enddate} /> */}
          </View>

          {/* //  chart */}

          <View style={styles.linechart}>
            <VictoryChart

            // Data visualization

              theme={VictoryTheme.material}
              domainPadding={{ x: 2 }}
              domain={{ x: [0, 7], y: [0, 11] }}
              scale={{ x: 'linear', y: 'linear' }}
            >
              <VictoryAxis
                // Axis design and layout
                label='DAYS'
                style={{
                  axisLabel: {
                    padding: 36,
                    fontWeight: 'bold',
                    margin: -60
                  }
                }}
                tickLabelComponent={<VictoryLabel
                  angle={-33}
                  style={{
                    fontSize: 10,
                    padding: -10
                  }}
                  />}
              />
              <VictoryAxis
                dependentAxis
                domain={[0, 10]}
                label='AVERAGE PAIN LEVEL'
                style={{
                  axisLabel: {
                    padding: 30,
                    fontWeight: 'bold'
                  }
                }}
              />
              <VictoryLine
                data={graphData}
                style={{
                  data: {
                    stroke: colors.pink } }}
              />
              <VictoryScatter
                data={graphData}
                size={4}
                style={{ data: { fill: '#913c60' } }}
              />
              <VictoryLegend
                x={Dimensions.get('screen').width / 2 - 100}
                orientation='horizontal'
                gutter={20}
                data={[
                  {
                    name: 'Pain Level',
                    symbol: {
                      fill: colors.orange
                    }
                  }
                ]}
              />
            </VictoryChart>

          </View>
          <View style={styles.screen}>
            <View style={styles.line} />
            <AppText style={styles.text2}> View Daily Report</AppText>
            <FlatList
              data={record.data}
              keyExtractor={(record_id) => record_id.toString()}
              renderItem={({ item }) => (
                <DateCard
                  title={moment(item.created_at).format('D MMMM, YYYY [at] h:mm A z')}
                  style={styles.dateList}
                  onPress={() => navigation.navigate('ViewReports', item)}
                />
              )}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 150,
    height: 400,
    alignContent: 'center',
    width: '100%',
    flex: 1
  },
  scrollView: {
    marginHorizontal: 10,
    height: 905,
    flexDirection: 'column'
  },
  linechart: {
    top: 15
  },
  screen: {
    top: 10,
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    margin: 5,
    height: 300,
    borderColor: colors.primary
  },
  text2: {
    fontWeight: 'bold',
    color: colors.orange,
    bottom: 10
  },
  date: {
    top: 20,
    flexDirection: 'row'
  },
  dateList: {
    backgroundColor: colors.orange
  },
  startdate: {
  },
  enddate: {
  }

})

export default ReportScreen
